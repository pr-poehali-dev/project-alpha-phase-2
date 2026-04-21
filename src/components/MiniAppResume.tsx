export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Резюме</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Опыт</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Senior Frontend разработчик</h4>
              <p className="text-gray-600 font-medium">Ваша компания - 2022 - настоящее время</p>
              <p className="mt-2">
                Разрабатываю высоконагруженные веб-приложения на React и TypeScript. Проектирую компонентные библиотеки, оптимизирую производительность и провожу код-ревью.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Full Stack разработчик</h4>
              <p className="text-gray-600 font-medium">Предыдущая компания - 2020 - 2022</p>
              <p className="mt-2">
                Создавал веб-приложения от проектирования БД до деплоя. Стек: Node.js, Python, PostgreSQL, React.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Проекты</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Корпоративный дашборд аналитики</h4>
              <p className="text-sm text-gray-600 mb-2">React, TypeScript, Python, PostgreSQL</p>
              <p>Система мониторинга и визуализации данных в реальном времени для внутренней команды.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Внутренний инструмент автоматизации</h4>
              <p className="text-sm text-gray-600 mb-2">Node.js, REST API, Docker</p>
              <p>Автоматизация рутинных процессов команды — сократил время на операции на 60%.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}