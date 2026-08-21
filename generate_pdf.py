import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def create_resume_pdf():
    target_path = os.path.join(os.path.dirname(__file__), "public", "Mohit_Bhalothia_Resume.pdf")
    doc = SimpleDocTemplate(
        target_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=1, # Center
        textColor=colors.HexColor('#111827')
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1,
        textColor=colors.HexColor('#374151')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#111827'),
        spaceBefore=8,
        spaceAfter=3,
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1f2937')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=12,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=colors.HexColor('#374151'),
        spaceAfter=2
    )

    bold_subheading = ParagraphStyle(
        'SubHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#111827')
    )

    story = []

    # Name Header
    story.append(Paragraph("Mohit Bhalothia", title_style))
    story.append(Spacer(1, 4))
    
    # Contact Info
    contact_text = "Jaipur, Rajasthan, India &nbsp;|&nbsp; +91-8824958436 &nbsp;|&nbsp; mohitchoudharyat7896@gmail.com<br/>" \
                   "linkedin.com/in/mohit-bhalothia07 &nbsp;|&nbsp; github.com/Mohit-bhalothia"
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))

    # Divider Line
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9ca3af'), spaceBefore=2, spaceAfter=8))

    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d1d5db'), spaceBefore=1, spaceAfter=4))
    summary_p = "DevOps and Cloud Engineering enthusiast with hands-on experience in AWS, Docker, Kubernetes, Jenkins, and Terraform, currently building production-grade CI/CD pipelines and multi-cloud monitoring solutions. Proven ability to design scalable, automated infrastructure that reduces deployment time and improves system reliability. Seeking to leverage strong foundations in Linux, Infrastructure as Code, and containerized environments to drive operational excellence in a DevOps role."
    story.append(Paragraph(summary_p, body_style))
    story.append(Spacer(1, 6))

    # Skills
    story.append(Paragraph("SKILLS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d1d5db'), spaceBefore=1, spaceAfter=4))
    skills_data = [
        "<b>• Languages:</b> C++, Python, Bash, PowerShell, YAML",
        "<b>• Frameworks:</b> FastAPI, Flask, HTML, CSS, Docker, Kubernetes, DevOps, CI/CD",
        "<b>• Tools/Platforms:</b> AWS (EC2, S3, Lambda, CloudWatch, SNS, IAM, VPC), Azure (Virtual Machines, Monitor, App Services), GCP, Linux, MySQL, PostgreSQL, MongoDB, FAISS, Git, GitHub, Jenkins, Terraform, Ansible, Prometheus, Grafana",
        "<b>• Soft Skills:</b> Team Work, Time Management, Adaptability"
    ]
    for s in skills_data:
        story.append(Paragraph(s, body_style))
        story.append(Spacer(1, 2))
    story.append(Spacer(1, 4))

    # Training and Internship
    story.append(Paragraph("TRAINING AND INTERNSHIP", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d1d5db'), spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("<b>Dotsquares</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>July 2026 – Present</i>", bold_subheading))
    story.append(Paragraph("<i>DevOps Trainee / Intern &nbsp;|&nbsp; Jaipur, India</i>", body_style))
    story.append(Spacer(1, 3))
    
    intern_bullets = [
        "• Completing structured DevOps training covering the full infrastructure and automation lifecycle, based on an industry-aligned DevOps roadmap.",
        "• Practiced Linux administration (permissions, users, SSH, networking, cron, SELinux, firewall, shell scripting) and core server setups (DNS, web, database, NFS).",
        "• Worked hands-on with AWS (EC2, VPC, S3, Route 53, IAM, RDS, ECS/EKS), Docker (Dockerfiles, multistage builds, Compose), and Kubernetes (Pods, Deployments, Services, Ingress, RBAC).",
        "• Built CI/CD pipelines with Jenkins and Git/GitHub, provisioned infrastructure with Terraform (IaC), and set up monitoring with Prometheus and Grafana."
    ]
    for b in intern_bullets:
        story.append(Paragraph(b, bullet_style))
    story.append(Spacer(1, 6))

    # Projects
    story.append(Paragraph("PROJECTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d1d5db'), spaceBefore=1, spaceAfter=4))

    # Project 1
    story.append(Paragraph("<b>AI Hub: Unified Web Platform for Multi-Modal Intelligence Integration</b> &nbsp;|&nbsp; <i>Jan 2025 – May 2025</i>", bold_subheading))
    p1_bullets = [
        "• Architected a production-grade full-stack AI platform consolidating 8 services – Handwriting Recognition, Text Summarization, Sentiment Analysis, Image Captioning, Speech-to-Text, Text-to-Speech, Object Detection, and intelligent document processing – into a unified web application.",
        "• Engineered a scalable three-tier architecture (React.js, FastAPI, PostgreSQL, FAISS) enabling concurrent processing of text, image, audio, and document inputs with low-latency inference.",
        "• Implemented a RAG pipeline with BERT embeddings and FAISS vector search for context-aware Q&A and semantic document retrieval; integrated TrOCR, T5, Whisper, Tacotron2, WaveGlow, and YOLOv5 for multimodal AI workflows.",
        "• Containerized all services using Docker with a cloud-ready deployment architecture (AWS/GCP) supporting scalable inference, concurrent requests, and real-time multi-pipeline processing.",
        "• <b>Tech Stack:</b> React.js, FastAPI, Flask, PostgreSQL, FAISS, Docker, PyTorch, Hugging Face Transformers, Whisper, YOLOv5, Tesseract OCR, AWS/GCP"
    ]
    for b in p1_bullets:
        story.append(Paragraph(b, bullet_style))
    story.append(Spacer(1, 4))

    # Project 2
    story.append(Paragraph("<b>CloudOps Pipeline – Automated CI/CD with Docker, Kubernetes, and Jenkins</b> &nbsp;|&nbsp; <i>Oct 2025 – Dec 2025</i>", bold_subheading))
    p2_bullets = [
        "• Designed and implemented a Jenkins CI/CD pipeline automating build, test, and deployment for a microservice application, reducing deployment time by 60%.",
        "• Containerized services with Docker and orchestrated on Kubernetes (GKE/Minikube) with auto-scaling, rolling updates, and health checks, achieving 99.9% uptime.",
        "• Configured AWS EC2 instances with GitHub Webhooks for continuous integration and real-time monitoring via Prometheus and Grafana dashboards.",
        "• <b>Tech Stack:</b> Jenkins, Docker, Kubernetes (Minikube/GKE), GitHub, AWS EC2, Prometheus, Grafana, YAML"
    ]
    for b in p2_bullets:
        story.append(Paragraph(b, bullet_style))
    story.append(Spacer(1, 4))

    # Project 3
    story.append(Paragraph("<b>Multi-Cloud Monitoring System – AWS + Azure Integration</b> &nbsp;|&nbsp; <i>Jan 2025 – Mar 2025</i>", bold_subheading))
    p3_bullets = [
        "• Built a multi-cloud monitoring dashboard aggregating metrics from AWS CloudWatch and Azure Monitor via Boto3 and Azure SDK, reducing manual monitoring efforts by 60%.",
        "• Automated cross-cloud resource provisioning with Terraform using modular IaC architecture; implemented real-time alerting via AWS SNS and Azure Alerts, cutting incident detection time by 65%.",
        "• <b>Tech Stack:</b> AWS CloudWatch, Azure Monitor, Terraform, Python (Boto3 + Azure SDK), SNS"
    ]
    for b in p3_bullets:
        story.append(Paragraph(b, bullet_style))
    story.append(Spacer(1, 6))

    # Certificates & Certifications
    story.append(Paragraph("CERTIFICATES AND CERTIFICATIONS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d1d5db'), spaceBefore=1, spaceAfter=4))
    certs = [
        "• <b>Microsoft Certified: DevOps Engineer Expert</b> – Microsoft, February 2026",
        "• <b>Intelligent Agent Software Development</b> – Coursera, February 2026",
        "• <b>Applied Data Engineering</b> – Coursera, November 2025",
        "• <b>Azure Administrator Associate</b> – Microsoft, March 2025",
        "• <b>Internet of Things</b> – NPTEL, July 2024"
    ]
    for c in certs:
        story.append(Paragraph(c, bullet_style))
    story.append(Spacer(1, 6))

    # Achievements
    story.append(Paragraph("ACHIEVEMENTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d1d5db'), spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("• Secured <b>1st Position</b> in 'Incredible 8,' LPU’s Inter-Hostel Competition on social media, organized by Lovely Professional University – May 2024", bullet_style))
    story.append(Spacer(1, 6))

    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#d1d5db'), spaceBefore=1, spaceAfter=4))
    
    edu_list = [
        ("Lovely Professional University", "Bachelor of Technology – Computer Science and Engineering; CGPA: 7.29", "Sept 2022 – May 2026 | Punjab, India"),
        ("Tagore Children Academy", "Intermediate; Percentage: 89%", "June 2020 – March 2021 | Surajgarh, Jhunjhunu"),
        ("Tagore Children Academy", "Matriculation; Percentage: 71%", "July 2018 – May 2019 | Surajgarh, Jhunjhunu")
    ]
    for inst, deg, dt in edu_list:
        story.append(Paragraph(f"<b>{inst}</b> &nbsp;|&nbsp; <i>{dt}</i>", bold_subheading))
        story.append(Paragraph(f"<i>{deg}</i>", body_style))
        story.append(Spacer(1, 2))

    doc.build(story)
    print("SUCCESS: PDF created at", target_path)

if __name__ == "__main__":
    create_resume_pdf()
