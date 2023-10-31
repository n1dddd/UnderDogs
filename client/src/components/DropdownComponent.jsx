import { useCategoriesStore } from '../stores/categoriesStore'
import styles from './DropdownComponent.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DropdownComponent = () => {
    const navigate = useNavigate();
    const categories = useCategoriesStore((state) => state.categories)
    const setActiveCategory = useCategoriesStore((state) => state.setActiveCategory)

    const [isOpen, setOpen] = useState(false);
    const toggleDropdown = () => setOpen(!isOpen)
    const handleRedirect = (category) => {
        if (category === "all") {
            setActiveCategory("");
            navigate("/products")
        }
        else {
            setActiveCategory(category);
            navigate("/products")
        }
        toggleDropdown();
    }
    const categoriesElements = categories.map((category, index) => {
        return (
            <li className={styles.categoryText} key={index} onClick={() => handleRedirect(category)}>{category}</li>
        )
    })
    return (
        <div className={styles.dropDown}>
            <div className={styles.dropDownHeader}>
                <p className={styles.dropDownHeaderText} onClick={() => toggleDropdown()}>Products</p>
            </div>
            {isOpen ?
                <ul className={styles.dropDownBody}>
                    {categoriesElements}
                </ul> : null
            }
        </div>
    )
}

export default DropdownComponent