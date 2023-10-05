'use client'
import { FC, useState } from 'react'
import styles from './ContactUs.module.scss'

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
          onSubmit={(e) => {
            e.preventDefault()
            if (!isAccepted) {
              setNeedToAccept(true)
            }
            console.log({
              name,
              email,
              description,
              isAccepted,
            })
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
            value={'Отправить'}
          />
        </form>
      </div>
    </section>
  )
}

export { ContactUsComponent }
