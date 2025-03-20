import { FabricImage, filters, loadSVGFromString, util, ImageProps, ObjectEvents, SerializedImageProps, FabricObject, FabricObjectProps, SerializedObjectProps } from 'fabric';
import generateQRCode from '@/components/character-editor/CreateQR';

/**
 * Carga una imagen desde una URL y la convierte en un objeto FabricImage.
 * 
 * @param {string} src - La URL de la imagen a cargar.
 * @param {Object} [options={}] - Opciones adicionales para el objeto FabricImage.
 * @returns {Promise<FabricImage>} - Una promesa que se resuelve con el objeto FabricImage cargado.
 */
export const loadImage = (src: string, options = {}): Promise<FabricImage> => {
    return new Promise<FabricImage>((resolve, reject) => {
        const imgElement = new window.Image();
        imgElement.src = src;
        imgElement.onload = () => resolve(new FabricImage(imgElement, options));
        imgElement.onerror = () => reject(`Error al cargar la imagen: ${src}`);
    });
};

/**
 * Aplica un filtro de inversión a una imagen FabricImage.
 * 
 * @param {FabricImage<Partial<ImageProps>, SerializedImageProps, ObjectEvents>} image - La imagen a la que se aplicará el filtro.
 * @param {boolean} shouldInvert - Indica si se debe aplicar el filtro de inversión.
 */
export const applyInvertFilter = (image: FabricImage<Partial<ImageProps>, SerializedImageProps, ObjectEvents>, shouldInvert: boolean) => {
    if (shouldInvert) {
        const invertFilter = new filters.Invert();
        image.filters.push(invertFilter);
        image.applyFilters();
    }
};

/**
 * Crea un objeto SVG a partir de una cadena de marcado SVG.
 * 
 * @param {string} svgMarkup - La cadena de marcado SVG.
 * @param {boolean} [applyFilter=false] - Indica si se debe aplicar un filtro al SVG.
 * @returns {Promise<void | FabricObject<Partial<FabricObjectProps>, SerializedObjectProps, ObjectEvents>>} - Una promesa que se resuelve con el objeto SVG creado.
 */
export const createSVG = (svgMarkup: string, applyFilter = false): Promise<void | FabricObject<Partial<FabricObjectProps>, SerializedObjectProps, ObjectEvents>> => {
    return loadSVGFromString(svgMarkup)
        .then(parsedSVG => {
            const objects = parsedSVG.objects;
            const svgObject = util.groupSVGElements(objects.filter(obj => obj !== null), {});

            if (applyFilter) {
                svgObject.globalCompositeOperation = 'multiply'
            }

            return svgObject;
        })
        .catch(error => {
            console.error('Error al crear el SVG:', error);
            throw error;
        });
};

// SVGs en constantes
export const SVG_SLEEVE = `
    <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z" fill="#COLOR"/>
        <path d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z" stroke="#COLOR"/>
        <path d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z" fill="#COLOR"/>
        <path d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z" stroke="#COLOR"/>
    </svg>
`;

export const SVG_TORSO = `
    <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M518.371 682.29H349.698L400.112 433.441C402.193 420.76 408.385 412.489 423.694 410.479C439.004 408.468 518.371 410.479 518.371 410.479V682.29Z" fill="#COLOR" stroke="#COLOR"/>
        <path d="M507.762 682.377H676.435L626.021 433.529C623.941 420.848 617.749 412.577 602.439 410.566C587.13 408.556 507.762 410.566 507.762 410.566V682.377Z" fill="#COLOR" stroke="#COLOR"/>
    </svg>
`;

/**
 * Genera un SVG de código QR dinámico para un usuario específico.
 * 
 * @param {number} userId - El ID del usuario para el cual se generará el código QR.
 * @returns {Promise<void | FabricObject<Partial<FabricObjectProps>, SerializedObjectProps, ObjectEvents>>} - Una promesa que se resuelve con el objeto SVG del código QR.
 */
export const createQRSVG = (userId: number) => {
    return createSVG(generateQRCode(userId));
};
