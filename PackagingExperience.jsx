import "./PackagingExperience.css";

function PackagingExperience(){

    return(

        <section className="packaging">

            <div className="packaging-left">

                <span>Unwrapping Memories</span>

                <h2>
                    Every order is packed
                    with love.
                </h2>

                <p>
                    Every Artiqon package is thoughtfully prepared to create a beautiful gifting experience from the moment it arrives.
                </p>

                <ul>
                    <li>🎀 Premium Gift Wrapping</li>
                    <li>💌 Personalized Message Card</li>
                    <li>✨ Decorative Fillers & Finishing</li>
                    <li>🎁 Ready-to-Gift Packaging</li>
                </ul>

            </div>

            <div className="packaging-right">

                <img
                src="https://placehold.co/700x800/F8F2EB/8B6B61?text=Packaging+Image"
                alt="Packaging"
                />

            </div>

        </section>

    )
}

export default PackagingExperience;