#  Neobrutalism Todo List

---

## Preview (พรีวิว)

<div align="center">
  <video src="https://github.com/phraewchuthamat/Todo-List-React/raw/main/public/Todolist.mp4" width="800" controls></video>
</div>
<br />
<div align="center">
  <img src="./public/image/todolist.png" alt="Todo List" width="400" />
  <img src="./public/image/form.png" alt="Form" width="400" />
  <img src="./public/image/editTask.png" alt="Edit Task" width="400" />
</div>

---

##  Key Features (จุดเด่น)

-    Neobrutalism Design: ดีไซน์ทันสมัย ขอบหนา สีสดใส (Bold & Vivid)
-    Strong Type Safety: พัฒนาด้วย **TypeScript 100%** ลดบั๊ก เพิ่มความเสถียร
-    Smooth UX: อนิเมชั่นลื่นไหลด้วย **Framer Motion** และ Feedback ครบครัน
-    Responsive & Persistent: รองรับทุกหน้าจอ + บันทึกข้อมูลลง LocalStorage อัตโนมัติ
-    Modular Architecture: โค้ดแยกส่วนนำไปใช้ต่อง่าย (Atomic Components) เสมือน UI Kit

## 🛠️ Tech Stack

<div align="center">
	<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
	<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" />
	<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
    <img src="https://img.shields.io/badge/Lucide_React-F7DF1E?style=for-the-badge&logo=lucide&logoColor=black" />
</div>

-   **Core:** React (Vite), TypeScript
-   **Styling & Motion:** Tailwind CSS v4, Framer Motion
-   **State & Logic:** Context API, useReducer, Custom Hooks
-   **Assets:** Lucide React Icons

##  Getting Started (เริ่มต้นใช้งาน)

### 1. Clone the repository
```bash
git clone https://github.com/phraewchuthamat/Todo-List-React.git
```

### 2. Enter the project folder
```bash
cd Todo-List-React
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the development server
```bash
npm run dev
```

### 5. Open in your browser
Visit: `http://localhost:5173` 

##  Usage Guide (วิธีใช้งานเบื้องต้น)

- **Add Task:** กดปุ่ม **ADD TASK** มุมขวาบน > กรอกข้อมูล > กด Save
- **Edit Task:** คลิกที่ปุ่ม **Edit (Pencil)** บนการ์ดงานเพื่อแก้ไข
- **Complete:** คลิก **Checkbox** หน้าชื่อ Task เพื่อทำเครื่องหมายว่าเสร็จ
- **Delete:** คลิกปุ่ม **Delete (Trash)** > กดยืนยันใน Popup เพื่อลบถาวร

## 📁 Project Structure

```
src/
├── components/      # UI Components (Button, Card, AlertPopup, etc.)
├── context/         # Global State Management (Typed Contexts)
├── hooks/           # Custom Hooks (useTodoApp, useAlert, etc.)
├── assets/          # Static Assets
├── utils/           # Helper Functions
└── App.tsx          # Main Entry Point
```

---
<div align="center">
  Create with  by <a href="https://github.com/phraewchuthamat">Phraew Chuthamat</a>
</div>
