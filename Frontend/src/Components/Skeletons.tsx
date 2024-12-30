export const Skeleton = () => {
    return (
      <div
        role="status"
        className="flex justify-center max-w-screen mx-auto animate-pulse"
      >
        <div className="py-8 border-b border-gray-200 last:border-b-0 cursor-pointer w-full">
          <div className="flex items-center  mb-4">
            <div className="h-4 max-w-2xl bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="flex items-center ">
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
    );
  };
  