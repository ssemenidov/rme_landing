'use client'
import { FC, useState } from 'react'
import styles from './ContactUs.module.scss'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
const ContactUsComponent: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [isAccepted, setAccepted] = useState(false)

  const [needToAccept, setNeedToAccept] = useState(false)

  return (
    <section className={styles.contact} id={'contact-us'}>
      <div className={styles.content}>
        <h3 className={styles.contact_title}>Заказать услуги</h3>
        <form
          className={styles.contact_form}
          onSubmit={async (e) => {
            e.preventDefault()
            if (!isAccepted) {
              setNeedToAccept(true)
              return
            }
            console.log({
              name,
              email,
              description,
              isAccepted,
            })

            const response = await fetch('/api/request', {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify({
                name,
                email,
                comment: description,
              }),
            })
            if (response.ok) {
              toast.success('Ваша зявка отправлена!', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              })
            } else {
              toast.error('Произошла ошибка, попробуйте снова', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              })
            }
            console.log(response)
          }}
        >
          <input
            placeholder={'Ваше имя'}
            className={styles.contact_form__input}
            name={'name'}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
          />
          <input
            placeholder={'Email'}
            type={'email'}
            className={styles.contact_form__input}
            name={'email'}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
          <textarea
            placeholder={'Ваш комментарий...'}
            className={styles.contact_form__textarea}
            onInput={(e) =>
              setDescription((e.target as HTMLInputElement).value)
            }
          />
          <label>
            <input
              type="checkbox"
              name="myCheckbox"
              defaultChecked={false}
              onChange={(e) => {
                setAccepted((e.target as HTMLInputElement).checked)
                if (needToAccept && (e.target as HTMLInputElement).checked) {
                  setNeedToAccept(false)
                }
              }}
              className={styles.contact_form__checkbox}
            />{' '}
            <span
              style={
                !needToAccept
                  ? {}
                  : {
                      color: '#ff5555',
                    }
              }
            >
              Даю согласие на обработку персональных данных
            </span>
          </label>
          <input
            type={'submit'}
            className={styles.contact_form__button}
            value={'Отправить заявку'}
          />
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  )
}

export { ContactUsComponent }
