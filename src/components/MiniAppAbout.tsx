export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Обо мне</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Привет, я разработчик!</h3>
          <p className="text-lg leading-relaxed mb-4">
            Пишу код и строю продукты, которые работают. Мне важна не только техническая сторона, но и то,
            как решение выглядит и ощущается для пользователя.
          </p>
          <p className="text-lg leading-relaxed">
            Когда не пишу код — изучаю новые технологии, слежу за трендами в разработке и делюсь опытом
            с коллегами через статьи и живые обсуждения.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Навыки и интересы</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Python", "Node.js", "PostgreSQL", "REST API", "Git", "Docker", "CI/CD", "Agile"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}