'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StaticCanvas, FabricText } from 'fabric';

import qrbg from '@/assets/QRCard.png';
import qricon from '@/assets/qr-block-icon.png';
import { headwearParts } from '@/components/character-editor/headwear-parts';
import { headParts } from '@/components/character-editor/head-parts';
import { patternParts } from '@/components/character-editor/patterns';
import torso from '@/assets/character-editor/body/torso.png';
import hands from '@/assets/character-editor/body/hands.png';

import { loadImage, applyInvertFilter, createSVG, createQRSVG, SVG_SLEEVE, SVG_TORSO } from '@/utils/canvasUtils';


interface Params {
    qrgenerator: string[];
}

export default function Page({ params }: { params: Params }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasInstance, setCanvasInstance] = useState<StaticCanvas | null>(null);
    const router = useRouter()
    const { qrgenerator } = React.use(params); // Obtener el slug de la URL
    const [headwearId, headId, patternId, playerColor, patternTone, userId] = qrgenerator;

    useEffect(() => {
        const partCategories = [headParts, headwearParts, patternParts]; // Orden de partes
        const selectedImages = [
            partCategories[0][Number(headwearId)], // headwear
            partCategories[1][Number(headId)],     // head
            partCategories[2][Number(patternId)],  // pattern
        ];

        if (!canvasRef.current) return;

        // Crear el canvas
        const canvas = new StaticCanvas(canvasRef.current, {
            width: 594,
            height: 942,
        });

        // Cargar y agregar las imágenes al canvas
        const loadAndDrawImages = async () => {
            try {
                // Imagen de fondo
                const backgroundImage = await loadImage(qrbg.src, {
                    scaleX: canvas.width / 594,
                    scaleY: canvas.height / 942,
                });
                canvas.backgroundImage = backgroundImage;

                // Figura 1
                await loadAndAddImage(torso.src, { left: 52, top: 5, scaleX: 0.5, scaleY: 0.5 });
                const svg1 = await createSVG(SVG_SLEEVE.replace(/COLOR/g, playerColor), true);
                if (svg1) {
                    svg1.set({ left: 192, top: 221, scaleX: 0.5, scaleY: 0.5 });
                    canvas.add(svg1);
                }
                const svg2 = await createSVG(SVG_TORSO.replace(/COLOR/g, playerColor));
                if (svg2) {
                    svg2.set({ left: 227, top: 209, scaleX: 0.5, scaleY: 0.5 });
                    canvas.add(svg2);
                }
                await loadAndAddImage(hands.src, { left: 52, top: 5, scaleX: 0.5, scaleY: 0.5 });

                // Figura 2
                await loadAndAddImage(torso.src, { left: 52, top: 444, scaleX: 0.5, scaleY: 0.5, flipY: true });
                const svg3 = await createSVG(SVG_SLEEVE.replace(/COLOR/g, playerColor), true);
                if (svg3) {
                    svg3.set({ left: 192, top: 627, scaleX: 0.5, scaleY: 0.5, flipY: true });
                    canvas.add(svg3);
                }
                const svg4 = await createSVG(SVG_TORSO.replace(/COLOR/g, playerColor));
                if (svg4) {
                    svg4.set({ left: 227, top: 615, scaleX: 0.5, scaleY: 0.5, flipY: true });
                    canvas.add(svg4);
                }
                loadAndAddImage(hands.src, { left: 52, top: 444, scaleX: 0.5, scaleY: 0.5, flipY: true });
                
                // Partes seleccionadas en figura 1
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    if (!part) continue;
                    const img = await loadImage(part.src.src, { left: 52, top: 5, scaleX: 0.5, scaleY: 0.5 });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    canvas.add(img);
                }
                
                // Partes seleccionadas en figura 2
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    if (!part) continue;
                    const img = await loadImage(part.src.src, { left: 52, top: 444, scaleX: 0.5, scaleY: 0.5, flipY: true });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    canvas.add(img);
                }

                // Textos
                const text1 = new FabricText(userId, {
                    left: 50,
                    top: 555,
                    fontSize: 50,
                    fill: 'black',  // Color del texto
                    fontFamily: 'Cera Pro', // Fuente,
                    fontWeight: 'bold',
                    angle: 270
                });
                canvas.add(text1);
                const text2 = new FabricText(userId, {
                    left: 550,
                    top: 390,
                    fontSize: 50,
                    fill: 'black',  // Color del texto
                    fontFamily: 'Cera Pro', // Fuente,
                    fontWeight: 'bold',
                    angle: 90
                });
                canvas.add(text2);

                // QR
                await loadAndAddImage(qricon.src, { left: -5, top: 0 });
                const qrSVG = await createQRSVG(userId);
                if (qrSVG) {
                    qrSVG.set({ left: 210, top: 381, scaleX: 9, scaleY: 9 });
                    canvas.add(qrSVG);
                }

                // Renderizar todo
                canvas.renderAll();
            } catch (error) {
                console.error(error);
            }
        };

        const loadAndAddImage = async (src: string, options: {} | undefined) => {
            const img = await loadImage(src, options);
            canvas.add(img);
        };

        loadAndDrawImages();

        return () => {
            canvas.dispose(); // Cleanup
        };
    }, []);

    // Función para exportar la imagen final
    const exportImage = () => {
        if (!canvasInstance) return;
        const dataUrl = canvasInstance.toDataURL({
            format: 'png',
            multiplier: 1
        });
        console.log(dataUrl);
    };

    return (
        <div className='bg-black'>
            {/* Canvas */}
            <canvas ref={canvasRef} width="594" height="942"></canvas>

            {/* Botón para exportar la imagen */}
            <button onClick={exportImage} className="bg-amber-400 cursor-pointer p-2 rounded">
                Generar Imagen
            </button>
        </div>
    );
}