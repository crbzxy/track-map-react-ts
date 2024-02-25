module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    indent: ['error', 'tab', { SwitchCase: 1 }], // Usa tabs para la indentación
    'react/jsx-indent': ['error', 'tab'], // Usa tabs para la indentación en JSX
    'react/jsx-indent-props': ['error', 'tab'], // Usa tabs para la indentación de props en JSX
    'react/jsx-one-expression-per-line': 0, // Desactiva la regla que exige una expresión JSX por línea
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }], // Permite extensiones .tsx
    'react/react-in-jsx-scope': 'off', // Desactiva esta regla, que es para proyectos sin Next.js
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
