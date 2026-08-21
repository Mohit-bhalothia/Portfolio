import base64
import os

pdf_path = os.path.join(os.path.dirname(__file__), "public", "Mohit_Bhalothia_Resume.pdf")
out_path = os.path.join(os.path.dirname(__file__), "src", "utils", "cv_base64.js")

with open(pdf_path, "rb") as f:
    data = f.read()

b64 = base64.b64encode(data).decode('utf-8')

with open(out_path, "w", encoding="utf-8") as f:
    f.write(f'export const PDF_BASE64 = "{b64}";\n')

print(f"SUCCESS: Embedded PDF of size {len(data)} bytes into base64 string of length {len(b64)}")
