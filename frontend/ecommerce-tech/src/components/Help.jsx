import { useState } from "react";
import down from "../assets/iconamoon_arrow-down-2-thin.svg";
import up from "../assets/iconamoon_arrow-up-2-thin.svg";

const Help = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  return (
    <div className="flex items-center">
      <div className="w-[714px] mb-6 ">
        <div className="w-[592px] rounded-xl bg-white p-4">
          <div className="w-[558px] mt-4 text-2xl text-blue-600 font-semibold">
            Soporte
          </div>
          <div className="w-[558px] mt-4 text-gray-800 ">
           {` Estamos aquí para ayudarte a resolver cualquier duda que tengas. Si
            no encuentras alguna respuesta que buscas, envíanos un mail a
            bluedragon@tecnologystore.com`}
          </div>
        </div>

        <div className="w-[592px] mt-4 rounded-xl bg-white p-4">
          <div className="flex place-content-between">
            <div className="w-[558px] mt-4 text-2xl text-blue-600 font-semibold">
              Cuenta
            </div>
            <img
              src={visible ? up : down}
              onClick={() => setVisible(!visible)}
            />
          </div>
          {visible && (
            <>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Tengo que registrarme para comprar?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Ofrecemos la opción de comprar como invitado. Puedes utilizar el
                carrito y hacer seguimiento de tu pedido. Tus datos se
                mantendrán confidenciales y no serás registrado.{" "}
              </div>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                Quiero cambiar de mail
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Al ingresar a tu cuenta puedes editar cualquier datos que
                necesites, por ejemplo tu dirección. Se te notificará por mail
                para confirmar las modificaciones por cuestiones de seguridad.
              </div>
            </>
          )}
        </div>

        <div className="w-[592px] mt-4 rounded-xl bg-white p-4">
          <div className="flex place-content-between">
            <div className="w-[558px] mt-4 text-2xl text-blue-600 font-semibold">
              Envíos
            </div>
            <img
              src={visible2 ? up : down}
              onClick={() => setVisible2(!visible2)}
            />
          </div>
          {visible2 && (
            <>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Puedo seguir mi pedido?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Sí, una vez que haya sido enviado, recibirás un número de
                seguimiento por mail. Puedes utilizar este número para dar
                seguimiento al estado de tu compra a través de nuestra
                plataforma.
              </div>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Cuál es el tiempo de entrega estimado?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                El tiempo de entrega puede variar según la ubicación y el método
                de envío seleccionado. Por lo general, nuestros envíos se
                entregan dentro de 5 días hábiles. Sin embargo, es importante
                tener en cuenta que pueden haber retrasos debido a
                circunstancias imprevistas.
              </div>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Ofrecen envío internacional?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Sí, ofrecemos envío a varios países. Puedes verificar la
                disponibilidad y los costos de envío en la página de checkout al
                ingresar tu dirección.
              </div>
            </>
          )}
        </div>

        <div className="w-[592px] mt-4 rounded-xl bg-white p-4">
          <div className="flex place-content-between">
            <div className="w-[558px] mt-4 text-2xl text-blue-600 font-semibold">
              Pago
            </div>
            <img
              src={visible3 ? up : down}
              onClick={() => setVisible3(!visible3)}
            />
          </div>
          {visible3 && (
            <>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Cuáles son las opciones de pago disponibles?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Aceptamos diversas formas de pago.
                <div className="pl-5">
                  <ul className="list-disc">
                    <li>Tarjeta de crédito.</li>
                    <li>Tarjeta de débito.</li>
                    <li>Transferencias bancarias.</li>
                    <li>Servicios de pago en línea, como PayPal.</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="w-[592px] mt-4 rounded-xl bg-white p-4">
          <div className="flex place-content-between">
            <div className="w-[558px] mt-4 text-2xl text-blue-600 font-semibold">
              Productos
            </div>
            <img
              src={visible4 ? up : down}
              onClick={() => setVisible4(!visible4)}
            />
          </div>
          {visible4 && (
            <>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Cuál es la diferencia entre las variedades de modelos de un
                mismo producto?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Cada modelo de producto puede tener características y
                especificaciones ligeramente diferentes. Te recomendamos revisar
                la descripción detallada de cada modelo para comprender mejor
                las diferencias y elegir el que mejor se adapte a tus
                necesidades.
              </div>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Tienen garantía en sus productos?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Sí, todos nuestros productos tienen una garantía estándar de 12
                meses. Esta garantía cubre defectos de fabricación y mal
                funcionamiento. Si experimentas algún problema con tu producto
                dentro del período de garantía, estaremos disponibles para
                ayudarte a solucionarlo.
              </div>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Cuál es la política de devoluciones y reembolsos?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Tenemos una política de devoluciones que te permite devolver el
                producto dentro de 30 días después de la entrega, siempre y
                cuando cumpla con nuestras condiciones de devolución. Una vez
                que recibamos el producto, procesaremos tu reembolso según
                nuestra política.
              </div>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Ofrecen servicios de instalación o configuración?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Actualmente no contamos con con servicio de instalación o
                configuración. Sin embargo, proporcionamos instrucciones
                detalladas y soporte técnico para ayudarte en el proceso de
                instalación o configuración.
              </div>
            </>
          )}
        </div>

        <div className="w-[592px] mt-4 rounded-xl bg-white p-4">
          <div className="flex place-content-between">
            <div className="w-[558px] mt-4 text-2xl text-blue-600 font-semibold">
              Seguridad
            </div>
            <img
              src={visible5 ? up : down}
              onClick={() => setVisible5(!visible5)}
            />
          </div>
          {visible5 && (
            <>
              <div className="w-[558px] mt-4 font-semibold text-gray-900">
                ¿Cuáles son las medidas de seguridad para proteger los datos
                personales y financieros de los clientes?
              </div>
              <div className="w-[558px] mt-2 text-gray-800 ">
                Nos tomamos muy en serio la seguridad de los datos de nuestros
                clientes. Utilizamos medidas de seguridad avanzadas para
                proteger la información personal y financiera que nos
                proporcionas. Esto incluye el uso de encriptación SSL en nuestra
                plataforma y el cumplimiento estricto de las regulaciones de
                protección de datos.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
