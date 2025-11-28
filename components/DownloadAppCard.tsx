import React from "react";

export default function DownloadAppCard() {
  return (
    <div className="bg-gradient-to-tr bg-background flex flex-col p-5 rounded-2xl border border-border/50 max-w-full">
      <span className="text-primary text-xs md:text-sm font-semibold">
        Disponível para Android e em breve IOS
      </span>

      <span className="text-foreground text-xl md:text-2xl leading-6 font-semibold mt-2 mb-2">
        Baixe agora o aplicativo do YggDrasil.
      </span>

      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start gap-4 p-5 rounded-2xl w-full">
        {/* Google Play */}
        <a
          href="https://play.google.com/store/apps/details?id=com.yggdrasil_app"
          className="inline-flex items-center justify-center border-2 border-border rounded-full bg-background px-6 py-2.5 text-foreground transition-all duration-200 hover:bg-transparent hover:text-primary w-full md:w-auto"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
            className="h-6 w-6"
          >
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="ml-4 flex flex-col items-start leading-none">
            <span className="mb-1 text-xs">Clique para baixar no</span>
            <span className="font-semibold">Google Play</span>
          </span>
        </a>

        {/* App Store */}
        <button className="inline-flex items-center justify-center border-2 border-border rounded-full bg-background px-6 py-2.5 text-foreground transition-all duration-200 hover:bg-transparent hover:text-primary w-full md:w-auto">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5058 27.625C25.33 29.3817 24.0833 31.0958 22.185 31.1242C20.2866 31.1667 19.6775 30.005 17.5241 30.005C15.3566 30.005 14.6908 31.0958 12.8916 31.1667C11.0358 31.2375 9.6333 29.2967 8.4433 27.5825C6.0208 24.0833 4.16497 17.6375 6.6583 13.3025C7.8908 11.1492 10.1008 9.78916 12.495 9.74666C14.3083 9.71833 16.0366 10.9792 17.1558 10.9792C18.2608 10.9792 20.3575 9.46333 22.5533 9.68999C23.4741 9.73249 26.0525 10.0583 27.71 12.495C27.5825 12.58 24.6358 14.3083 24.6641 17.8925C24.7066 22.1708 28.4183 23.6017 28.4608 23.6158C28.4183 23.715 27.8658 25.6558 26.5058 27.625ZM18.4166 4.95833C19.4508 3.78249 21.165 2.88999 22.5816 2.83333C22.7658 4.49083 22.1 6.16249 21.1083 7.35249C20.1308 8.55666 18.5158 9.49166 16.9291 9.36416C16.7166 7.73499 17.51 6.03499 18.4166 4.95833Z"
              fill="currentColor"
            />
          </svg>
          <span className="ml-4 flex flex-col items-start leading-none">
            <span className="mb-1 text-xs">Em breve na</span>
            <span className="font-semibold">Apple Store</span>
          </span>
        </button>
      </div>
    </div>
  );
}
