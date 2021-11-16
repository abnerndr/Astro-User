import React from 'react'
import { Link } from 'react-router-dom'
import './Global.css'
import '../App.css'

const Acess = () => {
	return (
		<div className="content">
			<header>
				<div className="logo">
					<img src="logo.svg" alt="Logo" height="90" />
				</div>
			</header>
			<div id="bg">
				<img src="bg-img.svg" alt="Imagem fundo" height="519" />
			</div>
			<main>
				<section>
					<div className="create-wrapp">
						<div className="create-title">
							<h2>Acesse sua conta</h2>
							<p>Entre na sua conta para acessar o sistema</p>
						</div>
						<form>
							<label className="sr-label" htmlFor="email">
								Digite seu email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Seu Email"
							/>

							<label className="sr-label" htmlFor="pass">
								Digite sua senha
							</label>
							<input
								type="password"
								id="pass"
								placeholder="Sua senha"
							/>

							<div className="buttons">
								<div>
									{/* <Router>
                                <Link to="/Acess" className="button">
                                    {'Já tem conta '}
                                </Link>
                            </Router> */}
									<Link className="button" to="/cad">
										Criar conta
									</Link>
									{/* <a className="button" href="/">
										Criar conta
									</a> */}
								</div>

								<button>Acessar</button>
							</div>
						</form>
						<div className="divisor">
							<div></div>
							<div>ou</div>
							<div></div>
						</div>
						<div className="login-media">
							<a href="/">
								<img
									src="google.svg"
									alt="Login with Google"
									height="60"
								/>
							</a>
							<a href="/">
								<img
									src="facebook.svg"
									alt="Login with Facebook"
									height="60"
								/>
							</a>
							<a href="/">
								<img
									src="github.svg"
									alt="Login with Github"
									height="60"
								/>
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Acess
