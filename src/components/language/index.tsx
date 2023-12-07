import { useTranslation } from 'react-i18next'

const ChangeLanguage = () => {
  const { i18n } = useTranslation()
  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = event.target.value
    i18n.changeLanguage(selectedLanguage)
    localStorage.setItem('selectedLanguage', selectedLanguage)
  }
  const storedLanguage = localStorage.getItem('selectedLanguage')
  const initialLanguage = storedLanguage ? storedLanguage : i18n.language

  return (
    <div className={'relative flex text-blue-400 justify-center items-center'}>
      <p className={' mr-2'}>Change language :</p>
      <select
        className={'outline-none bg-transparent'}
        onChange={handleLanguageChange}
        value={initialLanguage}
      >
        <option value="en-EN">Anglais</option>
        <option value="fr-FR">Français</option>
      </select>
    </div>
  )
}

export default ChangeLanguage
