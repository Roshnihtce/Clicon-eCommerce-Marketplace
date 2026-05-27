import { Container, Form } from 'react-bootstrap'

import { ArrowRight } from 'react-bootstrap-icons'

import google from '../../../assets/images/google.webp'
import amazon from '../../../assets/images/amazon.webp'
import philips from '../../../assets/images/philips.webp'
import toshiba from '../../../assets/images/toshiba.webp'
import samsung from '../../../assets/images/samsung-4.webp'

export default function Newsletter() {
    return (
        <section className="newsletter py-5">
            <Container>
                <div className="newsletter-content text-center mx-auto">
                    {/* TITLE */}

                    <h2 className="text-white fw-bold mb-3">
                        Subscribe to our newsletter
                    </h2>

                    <p className="newsletter-text mx-auto mb-4">
                        Praesent fringilla erat a lacinia egestas.
                        Donec vehicula tempor libero et <span class="d-block"> cursus.
                        Donec non quam urna. Quisque vitae
                        porta ipsum.</span>
                    </p>

                    {/* FORM */}

                    <Form className="newsletter-form d-flex align-items-center bg-white mx-auto p-2">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            className="border-0 shadow-none"
                        />

                        <button
                            type="submit"
                            className="btn newsletter-btn d-flex align-items-center gap-2"
                        >
                            SUBSCRIBE

                            <ArrowRight />
                        </button>
                    </Form>

                    {/* LINE */}

                    <div className="newsletter-divider mx-auto"></div>

                    {/* BRANDS */}

                    <div className="newsletter-brands d-flex justify-content-center align-items-center flex-wrap">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={google}
                                alt="google"
                            />
                        </a>

                        <a
                            href="https://www.amazon.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={amazon}
                                alt="amazon"
                            />
                        </a>

                        <a
                            href="https://www.philips.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={philips}
                                alt="philips"
                            />
                        </a>

                        <a
                            href="https://www.toshiba.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={toshiba}
                                alt="toshiba"
                            />
                        </a>

                        <a
                            href="https://www.samsung.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={samsung}
                                alt="samsung"
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}