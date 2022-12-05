import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
  const [formSent, setFormSent] = useState(false);

  return (
    <>
      <Formik
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setFormSent(true);
          setTimeout(() => setFormSent(false), 5000);
          console.log(valores);
        }}
        initialValues={{
          nombre: "Albert R",
          correo: "aramirez@aidforaids.org"
        }}
        validate={(valores) => {
          let errores = {};

          // validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          //validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }
          return errores;
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
              />
            </div>
            <ErrorMessage
              name="nombre"
              component={() => <div className="error">{errors.nombre}</div>}
            />
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
              />
            </div>
            <ErrorMessage
              name="correo"
              component={() => <div className="error">{errors.correo}</div>}
            />
            <div>
              <Field name="pais" as="select">
                <option value="Mexico">Mexico</option>
                <option value="España">España</option>
                <option value="Argentina">Argentina</option>
              </Field>
            </div>
            <label>
              <Field type="radio" name="sexo" value="hombre" /> Hombre
            </label>
            <label>
              <Field type="radio" name="sexo" value="mujer" /> Mujer
            </label>
            <div>
              <Field name="mensaje" as="textarea" placeholder="Mensaje" />
            </div>
            <button type="submit">Enviar</button>
            {formSent && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )}
        {/* {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.nombre && errors.nombre && (
              <div className="error">{errors.nombre}</div>
            )}
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.nombre && errors.correo && (
              <div className="error">{errors.correo}</div>
            )}
            <button type="submit">Enviar</button>
            {formSent && <p className="exito">Formulario enviado con exito!</p>}
          </form>
        )} */}
      </Formik>
    </>
  );
};

export default Formulario;
