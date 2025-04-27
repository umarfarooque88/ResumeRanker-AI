# AI-powered ATS Resume Optimizer ✨

Create and optimize ATS-friendly resumes based on real-world hiring data, not just AI guesses.

## ✨ Main Features
- Upload your resume → get ATS-friendliness score
- Match your resume to a job description
- Get optimization suggestions based on real hired resume patterns
- Generate a fully optimized ATS-friendly resume

## 🛠️ Tech Stack
- Frontend: HTML, TailwindCSS, JavaScript
- Backend: Python (Flask)
- Machine Learning: scikit-learn, transformers, spaCy
- Resume Parsing: pyresparser, pdfplumber

## 📦 Project Structure
- `frontend/` : UI files
- `backend/` : API server, ML models
- `models_training/` : Jupyter notebooks for training models
- `data/` : Sample datasets
- `docs/` : Documentation & project design

## 🚀 How to Run
1. Clone the repo
2. Setup Python backend:
    ```bash
    cd backend
    pip install -r requirements.txt
    python app.py
    ```
3. Open `frontend/index.html` in your browser

## 📚 Future Plans
- Fine-tune a LLM on resume + job description data
- Build user profiles for tracking resume improvements
- Add live scoring while typing

---

Built with ❤️ by Umar Farooque
