import confetti from 'canvas-confetti';
import { PDF_BASE64 } from './cv_base64';

export function handleDownloadCV() {
  confetti({
    particleCount: 90,
    spread: 75,
    origin: { y: 0.5 },
    colors: ['#00f3ff', '#9d4edd', '#00ff9d', '#ffffff']
  });

  try {
    // Convert Base64 string to Uint8Array
    const binaryString = window.atob(PDF_BASE64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Create Blob with PDF mime type
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);

    // Create hidden download anchor
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Mohit_Bhalothia_Resume.pdf';
    document.body.appendChild(link);
    link.click();

    // Cleanup after short delay
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 200);
  } catch (err) {
    console.error('Download error fallback:', err);
    window.open('/Mohit_Bhalothia_Resume.pdf', '_blank');
  }
}
