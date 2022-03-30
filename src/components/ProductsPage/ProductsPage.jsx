import React from 'react'
// import Data from './Data'
import './ProductsPage.css'
import ProductCard from '../ProductCard/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from 'fontawesome.macro'


const ProductsPage = () => {
    return (
        <div className="container">
            <div class="pd-container">
                <div class="pd-sbar-container">
                    <div class="pd-sbar-contentBox">
                        <span class="sbar-contentBox-title">Matoa Premium</span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel"><FontAwesomeIcon className ='secondary-bg brand-logo' icon ={fas('shapes')}/>Matoa
                            </p>
                        </span>
                        <span class="sbar-contentBox-title">Delivery Day</span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Get in 2 Days
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Next Day Delivery
                            </p>
                        </span>
                        <span class="sbar-contentBox-title">Category</span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Men's Watches
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Women's Watches
                            </p>
                        </span>
                        <span class="sbar-contentBox-title">Sort By</span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Featured
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Price High to Low
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Price Low to High
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Average Customer review
                            </p>
                        </span>
                        <span class="sbar-contentBox-title">Price</span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel">Under <i
                                class="fa-solid fa-indian-rupee-sign cr-icon"></i>20,000
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel"> <i class="fa-solid fa-indian-rupee-sign cr-icon"></i>20,000
                                -
                                <i class="fa-solid fa-indian-rupee-sign cr-icon"></i>40,000
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel"> <i class="fa-solid fa-indian-rupee-sign cr-icon"></i>40,000
                                -<i class="fa-solid fa-indian-rupee-sign cr-icon"></i>60,000
                            </p>
                        </span>
                        <span class="sbar-contentBox-data"><input type="checkbox" class="sbar-contentBox-input" />
                            <p class="sbar-contentBox-inplabel"> Over <i
                                class="fa-solid fa-indian-rupee-sign cr-icon"></i>60000
                            </p>
                        </span>
                        
                    </div>

                </div>
                <ProductCard/>
            </div> 
        </div>
    )
}

export default ProductsPage
