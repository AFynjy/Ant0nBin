import React from "react";
import levi from "./levi.jpg";

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                <a href="https://vk.com/whysopsycho" target="_blank">
                    <div className="chip">
                        <img src={levi} alt="Contact Person" />
                        Моя страница
                    </div>
                </a>
            </div>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">
                                You can use rows and columns here to organize your footer
                                content.
                            </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li>
                                    <a className="grey-text text-lighten-3" href="#">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a className="grey-text text-lighten-3" href="#">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a className="grey-text text-lighten-3" href="#">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a className="grey-text text-lighten-3" href="#">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;