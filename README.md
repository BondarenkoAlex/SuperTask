[![Build Status](https://travis-ci.org/BondarenkoAlex/SuperTask.svg?branch=master)](https://travis-ci.org/BondarenkoAlex/SuperTask)

# SuperTask

### [Demo](https://bondarenkoalex.github.io/SuperTask/) (Travis CI)

React, Redux, Reselect.

Test runner - Karma

Test frameworks - Enzyme, Mocha, Chai. 

Проект делал с учетом деления компонентов на тупые и умные. Так же из расчета, что в общем хранилище будут содержаться минимально необходимые данные.

Можно было организовать структуру другим образом. Все зависит от требований и подхода. Можно добавить оберток, тем самым уменьшить пробросы пропсов или вообще вынести "отображение" в общий стор.

Если проект закрыт - вакансию открыть нельзя.

Автофокус не делал в модальном окне - специально (не рекомендуют [no-autofocus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md))

Изначально проект свернут. Автоматически разворачивается только в том случае, если добавляется вакансия в пустой проект.

Проект или вакансию без названия создать нельзя.
