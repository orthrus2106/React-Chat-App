import notFoundImage from '../assets/not-found-page.svg'

const NotFound = () => {
    return (
        <div className='text-center'>
              <img
                src={notFoundImage}
                alt="Страница не найдена"
                className="img-fluid"
                style={{ maxWidth: '400px', height: 'auto' }}
                />
            <h1 className='h4 text-muted'>Страница не найдена</h1>
            <p className='text-muted'>
                Но вы можете перейти  
                <a href="/"> на главную страницу</a>
            </p>
        </div>
    )
}

export default NotFound