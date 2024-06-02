### Используемые технологии:

- **TypeScript (ts)**: TypeScript 
- **Next.js**: Next.js
- **Material-UI (MUI)**: Material-UI 

### Что изучалось:

- **Гибкая система каталогов и поиска**: Была реализована гибкая система каталогов и поиска по ним, обеспечивающая эффективное управление и поиск контента в приложении.
- **Переиспользование компонентов**: При разработке стремились максимально переиспользовать компоненты, что способствует повышению производительности и улучшению общей структуры 
- **css-in-js**: в проекте ни строчки css
- **Таже была создана гибкий и удобный FormBuilder**: с ним создание формы занимает всего пару минут и не более. Естественно он не идеален, и FormBuilder был создан под нужды задачи
приложения.


### Выводы:

- **css не идеален**: прежде чем начинать работать с mui пришлось бороться с оторжением css-in-js, так как звучит мягко говоря страно. но на деле это класный подход, который позволяет делать дизайн и структурировать код намного лучше.
- **Mui тоже не идеален**: не нужно было использовать MUI, а нужно было BaseUI, который не имеет оверхеда в виде не нужных стилей, с которыми приходилось воевать.
- **Также как css-in-js**: У css-in-js есть свои объектинвые минусы: производительность, мало кто знает, так как сложно людям объяснить зачем такой подход нужен
- **css/scss хороши**: нет потери производительности как с css-in-js и нет абстракции, что дает полный контроль и независимость от левой библиотеки
- **mui хорош**: я получил большое удовльствие работы с mui, когда у тебя все на одном языке, и в одном стиле написания: компонентый, и нет css классов, которые просто есть так как люди привыкли к ним, система вариантов, и плюс ты на объект можешь повесить изначальное поведение, и делается это на много проще чем на чистом react
- **За css-in-js будущее**: хоть и css-in-js имеет свои минусы, но все они связаны с тем как это реализована, а за идеей будущее. С таким подохом кодоавя база будет более лучший порядок держать


### Установка:

1. Клонируйте репозиторий.
2. Установите зависимости, используя `npm install`.
3. Запустите сервер разработки с помощью `npm run dev`.

### Использование:

После выполнения инструкций по установке вы можете перейти по предоставленному URL сервера разработки и взаимодействовать с приложением.
