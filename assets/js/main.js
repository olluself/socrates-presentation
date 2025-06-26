/* ======================================================================= */
/* FILE: assets/js/main.js (ФАЙЛ JAVASCRIPT) - ВЕРСІЯ 2.0                 */
/* ======================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- Словник з перекладами ---
    const translations = {
        en: {
            nav_problem: "Problem", nav_solution: "Solution", nav_demo: "Demo", nav_value: "Value",
            hero_title: "More than just entertainment.",
            hero_subtitle: "The \"Socrates\" concept transforms passive Netflix viewing into an active process of learning and self-development.",
            problem_title: "Yes, the feeling is real.",
            problem_subtitle: "Endless scrolling creates a familiar cycle. It all starts with two frustrations...",
            problem_card1_title: "Choice Paralysis",
            problem_card1_text: "Too many options, too little confidence in the choice.",
            problem_card2_title: "Shallow Recommendations",
            problem_card2_text: "Algorithms suggest what's popular, not what's useful for you.",
            problem_card3_title: "The Feeling of Wasted Time",
            problem_card3_text: "This is the true cost of mindless scrolling.",
            problem_final_statement: "\"Socrates\" is what solves this exact problem.",
            solution_title: "The Solution: Integration, Not Segregation",
            solution_text1: "\"Socrates\" is not a separate website, but a new layer of analytics and functionality seamlessly built into the familiar Netflix interface. We don't force users to change their habits — we enrich them.",
            solution_text2: "Our system analyzes film scripts to identify key educational themes, skills, and life lessons, then presents this information to the user at the moment of choice.",
            demo_title: "How It Works: Interactive Mockup",
            demo_subtitle: "Below is an interactive simulation of the Netflix interface with the \"Socrates\" feature integrated. Click on a movie.",
            demo_shelf_title: "Learn & Get Inspired",
            film1_tagline: "Learn how financial markets work.",
            film2_tagline: "Explore lessons in leadership and innovation.",
            film3_tagline: "Learn systematic problem-solving.",
            value_title: "Value for Everyone",
            value_user_title: "For the User",
            value_user1: "Education and self-development in a convenient format.",
            value_user2: "Time saved and reduced \"choice paralysis\".",
            value_user3: "A deeper emotional connection with the content.",
            value_biz_title: "For Netflix",
            value_biz1: "Reduced customer churn.",
            value_biz2: "Increased engagement and time spent in the service.",
            value_biz3: "Unique market advantage and positive PR.",
            footer_concept: "\"Project Socrates\" Concept.",
            footer_disclaimer: "This website is a demonstration project and is not affiliated with Netflix.",
            modal_learn_title: "What you will learn:",
        },
        pl: {
            nav_problem: "Problem", nav_solution: "Rozwiązanie", nav_demo: "Demo", nav_value: "Wartość",
            hero_title: "Więcej niż tylko rozrywka.",
            hero_subtitle: "Koncepcja \"Socrates\" przekształca pasywne oglądanie Netflixa w aktywny proces nauki i samorozwoju.",
            problem_title: "Tak, to uczucie jest prawdziwe.",
            problem_subtitle: "Niekończące się przewijanie tworzy znajomy cykl. Wszystko zaczyna się od dwóch frustracji...",
            problem_card1_title: "Paraliż decyzyjny",
            problem_card1_text: "Zbyt wiele opcji, zbyt mało pewności co do wyboru.",
            problem_card2_title: "Płytkie rekomendacje",
            problem_card2_text: "Algorytmy sugerują to, co popularne, a nie to, co jest dla Ciebie przydatne.",
            problem_card3_title: "Poczucie straconego czasu",
            problem_card3_text: "To prawdziwa cena bezmyślnego przewijania.",
            problem_final_statement: "Właśnie ten problem rozwiązuje \"Socrates\".",
            solution_title: "Rozwiązanie: Integracja, nie segregacja",
            solution_text1: "\"Socrates\" to nie osobna strona, ale nowa warstwa analityczna i funkcjonalna, płynnie wbudowana w znajomy interfejs Netflix. Nie zmuszamy użytkowników do zmiany nawyków — wzbogacamy je.",
            solution_text2: "Nasz system analizuje scenariusze filmowe, aby zidentyfikować kluczowe tematy edukacyjne, umiejętności i lekcje życiowe, a następnie prezentuje te informacje użytkownikowi w momencie wyboru.",
            demo_title: "Jak to działa: Interaktywna makieta",
            demo_subtitle: "Poniżej znajduje się interaktywna symulacja interfejsu Netflix z zintegrowaną funkcją \"Socrates\". Kliknij na film.",
            demo_shelf_title: "Ucz się i inspiruj",
            film1_tagline: "Dowiedz się, jak działają rynki finansowe.",
            film2_tagline: "Poznaj lekcje przywództwa i innowacji.",
            film3_tagline: "Naucz się systemowego rozwiązywania problemów.",
            value_title: "Wartość dla wszystkich",
            value_user_title: "Dla użytkownika",
            value_user1: "Edukacja i samorozwój w wygodnym formacie.",
            value_user2: "Oszczędność czasu i zmniejszenie \"paraliżu decyzyjnego\".",
            value_user3: "Głębsze emocjonalne połączenie z treścią.",
            value_biz_title: "Dla Netflix",
            value_biz1: "Zmniejszenie rezygnacji klientów (Churn Rate).",
            value_biz2: "Zwiększone zaangażowanie i czas spędzony w serwisie.",
            value_biz3: "Unikalna przewaga rynkowa i pozytywny PR.",
            footer_concept: "Koncepcja \"Project Socrates\".",
            footer_disclaimer: "Ta strona jest projektem demonstracyjnym i nie jest powiązana z firmą Netflix.",
            modal_learn_title: "Czego się nauczysz:",
        },
        uk: {
            nav_problem: "Проблема", nav_solution: "Рішення", nav_demo: "Демо", nav_value: "Цінність",
            hero_title: "Більше, ніж просто розваги.",
            hero_subtitle: "Концепція \"Socrates\" перетворює пасивний перегляд Netflix на активний процес навчання та саморозвитку.",
            problem_title: "Так, це відчуття реальне.",
            problem_subtitle: "Нескінченний скролінг створює знайомий цикл. Все починається з двох розчарувань...",
            problem_card1_title: "Параліч вибору",
            problem_card1_text: "Занадто багато опцій, занадто мало впевненості у виборі.",
            problem_card2_title: "Поверхневі рекомендації",
            problem_card2_text: "Алгоритми пропонують популярне, а не корисне саме для вас.",
            problem_card3_title: "Відчуття Втраченого Часу",
            problem_card3_text: "Це справжня ціна бездумного скролінгу.",
            problem_final_statement: "Саме цю проблему вирішує \"Socrates\".",
            solution_title: "Рішення: Інтеграція, а не сегрегація",
            solution_text1: "\"Socrates\" — це не окремий сайт, а новий шар аналітики та функціоналу, безшовно вбудований у знайомий інтерфейс Netflix. Ми не змушуємо користувача змінювати звички — ми збагачуємо їх.",
            solution_text2: "Наша система аналізує сценарії фільмів, щоб виявити ключові освітні теми, навички та життєві уроки, а потім подає цю інформацію користувачу в момент вибору.",
            demo_title: "Як це працює: Інтерактивний макет",
            demo_subtitle: "Нижче наведено інтерактивну імітацію інтерфейсу Netflix з вбудованою функцією \"Socrates\". Натисніть на фільм.",
            demo_shelf_title: "Навчайся та надихайся",
            film1_tagline: "Дізнайтеся, як працюють фінансові ринки.",
            film2_tagline: "Вивчіть уроки лідерства та інновацій.",
            film3_tagline: "Навчіться системному вирішенню проблем.",
            value_title: "Цінність для всіх",
            value_user_title: "Для користувача",
            value_user1: "Освіта та саморозвиток у зручному форматі.",
            value_user2: "Економія часу та зменшення \"паралічу вибору\".",
            value_user3: "Більш глибокий емоційний зв'язок з контентом.",
            value_biz_title: "Для Netflix",
            value_biz1: "Зменшення відтоку клієнтів (Churn Rate).",
            value_biz2: "Підвищення залученості та часу в сервісі.",
            value_biz3: "Унікальна ринкова перевага та позитивний PR.",
            footer_concept: "Концепція \"Project Socrates\".",
            footer_disclaimer: "Цей сайт є демонстраційним проєктом і не є афілійованим з Netflix.",
            modal_learn_title: "Чого ви навчитесь:",
        }
    };

    const filmData = {
        "big-short": {
            en: { title: "The Big Short", synopsis: "A group of investors bet against the US mortgage market, predicting the 2008 global financial crisis.", learn: ["Understand the basics of mortgage-backed securities (MBS) and collateralized debt obligations (CDOs).", "Learn to recognize the signs of a financial bubble and mass market hysteria.", "See the importance of critical thinking and data analysis when everyone else is certain of the opposite."] },
            pl: { title: "The Big Short", synopsis: "Grupa inwestorów obstawia przeciwko amerykańskiemu rynkowi hipotecznemu, przewidując światowy kryzys finansowy z 2008 roku.", learn: ["Zrozum podstawy papierów wartościowych zabezpieczonych hipoteką (MBS) i zobowiązań zabezpieczonych długiem (CDO).", "Naucz się rozpoznawać oznaki bańki finansowej i masowej histerii na rynku.", "Zobacz znaczenie krytycznego myślenia i analizy danych, gdy wszyscy wokół są pewni czegoś przeciwnego."] },
            uk: { title: "Гра на пониження", synopsis: "Група інвесторів робить ставку проти ринку нерухомості США, передбачивши світову фінансову кризу 2008 року.", learn: ["Зрозумійте основи іпотечних цінних паперів (MBS) та облігацій (CDO).", "Навчіться розпізнавати ознаки фінансової бульбашки та масової істерії на ринку.", "Подивіться на важливість критичного мислення та аналізу даних, коли всі навколо впевнені у зворотному."] }
        },
        "steve-jobs": {
            en: { title: "Steve Jobs", synopsis: "A behind-the-scenes look at three key Apple product launches, revealing the complex character of its founder.", learn: ["See the principles of product design and marketing that changed the world.", "Analyze a leadership style based on perfectionism and an uncompromising vision.", "Understand the importance of brand building and creating an emotional connection with the consumer."] },
            pl: { title: "Steve Jobs", synopsis: "Spojrzenie zza kulis na trzy kluczowe premiery produktów Apple, które ujawniają złożony charakter jej założyciela.", learn: ["Zobacz zasady projektowania produktów i marketingu, które zmieniły świat.", "Przeanalizuj styl przywództwa oparty na perfekcjonizmie i bezkompromisowej wizji.", "Zrozum znaczenie budowania marki i tworzenia emocjonalnego związku z konsumentem."] },
            uk: { title: "Стів Джобс", synopsis: "Залаштунковий погляд на три ключові презентації продуктів Apple, що розкривають складний характер її засновника.", learn: ["Подивіться на принципи продуктового дизайну та маркетингу, які змінили світ.", "Проаналізуйте стиль лідерства, що базується на перфекціонізмі та безкомпромісному баченні.", "Зрозумійте важливість побудови бренду та створення емоційного зв'язку зі споживачем."] }
        },
        "bills-brain": {
            en: { title: "Inside Bill's Brain", synopsis: "A documentary series about how Bill Gates thinks and how he tries to solve humanity's most complex problems.", learn: ["Learn about the approach to solving global problems like sanitation and climate change.", "See a thinking model that breaks down complex tasks into smaller, manageable parts.", "Understand the principles of a systematic approach and the importance of long-term planning."] },
            pl: { title: "W głowie Billa Gatesa", synopsis: "Serial dokumentalny o tym, jak myśli Bill Gates i jak próbuje rozwiązać najbardziej złożone problemy ludzkości.", learn: ["Dowiedz się o podejściu do rozwiązywania globalnych problemów, takich jak warunki sanitarne i zmiany klimatu.", "Zobacz model myślenia, który dzieli złożone zadania na mniejsze, łatwiejsze do zarządzania części.", "Zrozum zasady systemowego podejścia i znaczenie długoterminowego planowania."] },
            uk: { title: "В голові Білла Гейтса", synopsis: "Документальний серіал про те, як мислить Білл Гейтс, і як він намагається вирішити найскладніші проблеми людства.", learn: ["Дізнайтеся про підхід до вирішення глобальних проблем, таких як санітарія та зміна клімату.", "Подивіться на модель мислення, що розбиває складні завдання на менші, керовані частини.", "Зрозумійте принципи системного підходу та важливість довгострокового планування."] }
        }
    };

    let currentLang = 'en';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (translations[lang]?.[key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('.lang-switcher button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    document.querySelectorAll('.film-card').forEach(card => {
        card.addEventListener('click', () => {
            const filmId = card.dataset.id;
            const data = filmData[filmId][currentLang];
            const posterUrl = card.querySelector('img').src;

            let learnListHTML = data.learn.map(point => 
                `<li class="flex items-start"><span class="text-yellow-400 mr-3 mt-1 flex-shrink-0">💡</span><span>${point}</span></li>`
            ).join('');

            modalContent.innerHTML = `
                <div class="flex justify-end mb-4"><button id="close-modal" class="text-white text-3xl leading-none">&times;</button></div>
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="w-full md:w-1/3 flex-shrink-0"><img src="${posterUrl}" alt="${data.title}" class="rounded-lg w-full"></div>
                    <div class="w-full md:w-2/3">
                        <h2 class="text-3xl font-bold mb-4">${data.title}</h2>
                        <p class="text-gray-300 mb-6">${data.synopsis}</p>
                        <div class="bg-gray-900 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-3">${translations[currentLang].modal_learn_title}</h4>
                            <ul class="space-y-2 text-gray-200">${learnListHTML}</ul>
                        </div>
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            document.getElementById('close-modal').addEventListener('click', () => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.addEventListener('click', (e) => setLanguage(e.target.dataset.lang));
    });

    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(section => observer.observe(section));

    // Встановлюємо мову за замовчуванням при завантаженні (можна змінити на 'uk' або 'pl')
    setLanguage('en');
});
