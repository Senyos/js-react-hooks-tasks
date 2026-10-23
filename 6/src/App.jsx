import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const NUMBERS = [1, 5, 10, 20];

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i += 1) {
        result *= i;
    }

    return result;
}

function FactorialResult({ number }) {
    if (number === null) {
        return null;
    }

    return (
        <div>
        Factorial of {number} is {factorial(number)}
        </div>
    );
}

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div>
        <button type="button" onClick={() => i18n.changeLanguage('en')}>
        English
        </button>
        <button type="button" onClick={() => i18n.changeLanguage('ru')}>
        Русский
        </button>
        </div>
    );
}

function FactorialButtons({ onSelect }) {
    const { t } = useTranslation();

    return (
        <div>
        {NUMBERS.map((number) => (
            <button
            key={number}
            type="button"
            onClick={() => onSelect(number)}
            >
            {t('factorial')} {number}
            </button>
        ))}
        </div>
    );
}

function App() {
    const [number, setNumber] = useState(null);

    return (
        <div>
        <LanguageSwitcher />
        <FactorialButtons onSelect={setNumber} />
        <FactorialResult number={number} />
        </div>
    );
}
// END

export default App;
