
const ModalSave = ({ isOpen, onClose,  title = "", message = "", duration = 5000, onConfirm }) => {
  if (!isOpen) return null;

  const handleOkClick = () => {
    onClose(); 
    if (onConfirm) {
      onConfirm(); 
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg w-1/3 p-6 z-50">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <p>{message}</p>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleOkClick}
            className="px-4 py-2 bg-green-700 hover:bg-green-800 transition-all text-white rounded font-bold"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSave;
