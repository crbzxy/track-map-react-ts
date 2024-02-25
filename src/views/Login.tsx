import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Typography, Container } from '@mui/material';

const LoginView: React.FC = () => {
  // Función de envío del formulario
  const handleSubmit = (values: any, actions: any) => {
    // Aquí puedes manejar la lógica de autenticación, como enviar los datos al servidor
    console.log('Formulario enviado:', values);
    actions.setSubmitting(false);
  };

  return (
    <Container maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Iniciar sesión
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors: any = {};
          // Validación de los campos del formulario
          if (!values.email) {
            errors.email = 'Correo electrónico requerido';
          }
          if (!values.password) {
            errors.password = 'Contraseña requerida';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={{ width: '100%', marginTop: '1rem' }}>
            <Field
              as={TextField}
              name="email"
              type="email"
              label="Correo electrónico"
              fullWidth
              margin="normal"
              variant="outlined"
              error={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              name="password"
              type="password"
              label="Contraseña"
              fullWidth
              margin="normal"
              variant="outlined"
              error={<ErrorMessage name="password" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              style={{ marginTop: '1rem' }}
            >
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginView;
