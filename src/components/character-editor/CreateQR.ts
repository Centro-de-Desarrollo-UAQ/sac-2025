import qrcodegen from "nayuki-qr-code-generator";

// Esta función se copió del input-demo de la librería
const toSvgString = (qr: qrcodegen.QrCode, border: number): string => {
  if (border < 0) throw new RangeError("Border must be non-negative");
  const parts: string[] = [];
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.getModule(x, y)) {
        parts.push(`M${x + border},${y + border}h1v1h-1z`);
      }
    }
  }

  // se pueden agregar otros colores en los fill de svg
  // Aquí se "dibuja" el svg
  return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" stroke="none">
	    <path d="${parts.join(" ")}" fill="black"/>
    </svg>
    `;
};

// Función para generar el código QR basado en un número
// El ECC se eligió high ya que las condiciones en que se escanea pueden variar
const generateQRCode = (number: number): string => {
  const text = number.toString();
  const qr = qrcodegen.QrCode.encodeText(text, qrcodegen.QrCode.Ecc.HIGH);
  const svg = toSvgString(qr, 2);
  return svg;
};

export default generateQRCode;