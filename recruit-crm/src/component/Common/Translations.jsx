import { translation } from "../../store/translations"

const Translations = ({ id }) => {
    return (
        <span>{translation[id]}</span>
    )
}
export default Translations;