import Footer from '../../Footer'
import Banner from '../../Banner'

function NotFound() {
  return (
    <div className='container'>
      <Banner />
      <div className='notfound-infos'>
        <p className='error'>404</p>
        <p className='message'>Oups! La page que vous demandez n'existe pas.</p>
        <a className='link' href ='../' >Retourner sur la page d'accueuil</a>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
