import React from 'react'
import { Link } from 'react-router-dom'
import './Global.css'
import '../App.css'

import Acess from './Acess'

const Create = () => {
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
							<h2>faça já seu cadastro</h2>
							<p>crie sua conta para ter acesso ao sistema</p>
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

							<label className="sr-label" htmlFor="pass2">
								Repita sua senha
							</label>
							<input
								type="password"
								id="pass2"
								placeholder="Repita a Senha"
							/>

							<div className="buttons">
								<div>
									{/* <Link to="/Acess" className="button">
										{'Já tem conta '}
									</Link> */}
									<Link className="button" to="/">
										Já tem conta?
									</Link>
									{/* <a className="button" href="/Acess">
										Já tem conta{' '}
									</a> */}
								</div>

								<button>Cria Conta</button>
							</div>
						</form>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Create
