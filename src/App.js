import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

document.body.style = 'background: #000000;';

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>SecureDevScript Demo</title>
        <link href="../../cdn.jsdelivr.net/npm/bootstrap-icons%401.5.0/font/bootstrap-icons.css" rel="stylesheet" type="text/css" />
        <link href="../../fonts.googleapis.com/cssea9f.css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body>
        <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <a class="navbar-brand" href="#!">SecureDevScript By ShadowLock</a>
                <a class="btn btn-link" href="#About">About the project</a>
            </div>
        </nav>
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <h1 class="mb-5">Upload your file to be scanned for vulnerabilities</h1>
                            <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="input-group mb-3">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile02"></input>
                                <button class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02" ><n>UPLOAD</n></button>
                            </div>
                            <div class='barrita'>
                            <div class="slidecontainer">
                                <input type="range" min="1" max="100" value="50" class="drag__bar" id="myRange" oninput='changeColor()'></input>
                            </div>
                            <datalist id="ticks">
                            <option value="0" label="0">Menos Creatividad</option>
                            <option value="1.57" label="π/2">Más creatividad</option>
                            <option value="3.14" label="π"></option>
                            </datalist>
                            </div>
                            </div>
                            <div class="spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            </div>
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a class="text-white" href="../../startbootstrap.com/solution/contact-forms.html">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-window m-auto text-primary"></i></div>
                            <h3>Findings</h3>
                            <p class="lead mb-0">Assists in the detection and correction of vulnerabilities in the code, which are essential for maintaining the confidentiality, integrity, and availability of data and systems, as well as ensuring that the software operates efficiently and securely at all times.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-layers m-auto text-primary"></i></div>
                            <h3>Changes</h3>
                            <p class="lead mb-0">SecureDevScript provides valuable results, including a secure version of the submitted code, highlighted with comments detailing the changes made to eliminate vulnerabilities. Additionally, it offers a descriptive summary of the alterations performed. Users can download the enhanced code and gain insights into the security improvements made to their software, ensuring a safer and more reliable application.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-terminal m-auto text-primary"></i></div>
                            <h3>More info</h3>
                            <p class="lead mb-0">Our website also provides you with URLs where you can delve deeper into the vulnerabilities present in your code. Additionally, you can adjust the creativity of the model, meaning how risky the LLM is going to be.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="showcase">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text" id='About'>
                        <h2>About the proyect</h2>
                        <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-lg-6 my-auto showcase-text">
                        <h2>About Us</h2>
                        <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="#!">About</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Contact</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy;  SecureDevScript 2023. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <script src="../../cdn.jsdelivr.net/npm/bootstrap%405.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="../../cdn.startbootstrap.com/sb-forms-0.4.1.js"></script>
    </body>
    </div>
  );
}

export default App;
