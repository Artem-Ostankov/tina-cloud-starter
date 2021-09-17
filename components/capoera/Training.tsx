import React, { FC } from 'react'

// {/*<h2>Capoeira Kursstart in Rosenheim ab 14. September 2021</h2>*/}

export const Training: FC = () => {
  return (
    <div id="training" className="bg-white mt-24 flex flex-col items-center tracking-wide">
      <h2 className="text-3xl font-semibold uppercase">Traininszeiten</h2>

      <div className="flex justify-between items-start">
        <div className="m-4 flex flex-col p-4 items-start">
          <h3 className="w-full text-xl text-center font-semibold m-4">Erwaschene</h3>
          <ul>
            <li className=" flex flex-col text-left text-m p-6">
              <p className="text-gray-600 ">Dienstag </p>
              <p className="text-gray-600 ">18:30 - 19:30 Uhr - Alle Erwaschene</p>
              <p className="inline-flex text-gray-400">
                Ignaz-Günther Gymnasium
                <a href={'https://goo.gl/maps/fS1HxDXxLo16cwwX9'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              </p>
              <p className="inline-flex text-gray-400">
                (Eingang ist gegenüber der Herbststraße am Kreisverkehr)
              </p>
            </li>

            <li className="flex flex-col  text-left text-m  p-6">
              <p className="text-gray-600 ">Freitag</p>
              <p className="text-gray-600 ">18:00 - 19:00 Uhr - Anfängerkurs</p>
              <p className="text-gray-600 ">19:00 - 20:00 Uhr - Fortgeschrittenenkurse</p>
              <p className="inline-flex text-gray-400">
                MTV Turneralm
                <a href={'https://goo.gl/maps/JspECZchumri9pTF9'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              </p>
              <p className="inline-flex text-gray-400">Turnerweg 39, 83026 Rosenheim</p>
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <div className="m-4 flex flex-col p-4 items-start">
            <h3 className="w-full text-xl text-center font-semibold m-4">Kinder</h3>

            <div className=" flex flex-col text-left text-m p-6">
              <p className="text-gray-600 ">Dienstag</p>
              <p className="text-gray-600 ">17:00 - 18:00 Uhr - Alle Kinder</p>
              <p className="inline-flex text-gray-400">
                Pfarrzentrum St. Georg
                <a href={'https://goo.gl/maps/XeB769uU7qSzJY9Z8'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              </p>
              <p className="inline-flex text-gray-400">Am Kirchplatz 1, 83071 Stephanskirchen</p>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
      <div className=" mt-8 flex flex-col items-center">
        <h2 className="text-xl">Anmeldung:</h2>
        <a className="text-blue" href="mailto:info@capoeira-rosenheim.de">
          info@capoeira-rosenheim.de
        </a>
        <p>+49 179 921 372 6</p>
        <p>+43 664 162 364 6 </p>
      </div>
    </div>
  )
}
