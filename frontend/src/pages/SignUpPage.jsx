import Layout from '../components/page/Layout';
import signUpImage from '../assets/signup-image.jpg';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/signup/SignUpForm';

const SignUpPage = () => {
    return (
        <Layout>
            <div className="container-fluid h-100">
                <div className="row justify-content-center align-content-center h-100" >
                <div className="col-12 col-md-8 col-xxl-6">
                    <div className="card shadow-sm">
                    <div className="card-body row p-5">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            src={signUpImage}
                            className="rounded-circle"
                            alt="Регистрация"
                        />
                        </div>
                        <div className="col-12 col-md-6 mt-3 mt-md-0">
                            <SignUpForm />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignUpPage