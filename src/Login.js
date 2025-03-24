export default function App() {
    const handleOpenWindow = () => {
      const newWindow = window.open("", "_blank", "width=600,height=400");
      newWindow.document.write(`
        <html>
          <head>
            <title>New Window</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
              h2 { color: blue; }
            </style>
          </head>
          <body>1
            <h2>Hello from the new window!</h2>
            <p>This is some dynamic content.</p>
          </body>
        </html>
      `);
    };
  
    return (
      <div className="flex flex-col items-center p-5">
        <button
          onClick={handleOpenWindow}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Open New Window
        </button>
      </div>
    );
  }
  