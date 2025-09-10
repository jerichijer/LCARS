# LCARS Interface (React + Electron)

This branch contains a **React frontend** wrapped in **Electron**.

## File Structure
root/
|- electron-main.js <!-- main electron process -->
|- package.json 	<!-- metadata and scripts -->
|- public/
|	|- index.html
|	|- electron.js 	<!-- optional preload scripts -->
|- src/				<!-- react source code -->
|
|- build/			<!-- react prod build -->

---

## Getting Started
1. **Migrate to React Branch**:
```bash
git switch react
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Build React Frontend**:
```bash
npm run build
```

4. **Run Electron**:
```bash
npm start
```

Note: Electron will load the react production build from **/build/index.html**
