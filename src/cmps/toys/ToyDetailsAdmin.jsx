import { useSelector } from "react-redux";
import { Link } from "react-router";

const ToyDetailsAdmin = ({ toy }) => {
    const user = useSelector(state => state.userModule.user)
    if (!user || !user.isAdmin) return null
    return <section className="toy-details-admin">
        {toy &&
            <>
                <button><Link to={`/toy/${toy._id}/edit`}>Edit Product</Link></button>
                <button>Delete Product</button>
            </>
        }
        <button><Link to={`/toy/edit`}>Add New Product</Link></button>
    </section>
}

export default ToyDetailsAdmin;