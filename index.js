import { getAllProducts, getProductDetails, deleteProduct } from "./src/services/productService.js";

async function main() {
    const cmd = process.argv[2];
    try {
        if (cmd === 'get') {
            const products = await getAllProducts();
            console.log('Productos:', products);
        } else if (cmd === 'getById') {
            const id = process.argv[3];
            if (!id) {
                console.error('Por favor, proporciona un ID de producto.');
                return;
            }
            const product = await getProductDetails(id);
            console.log('Detalles del producto:', product);
        } else if (cmd === 'delete') {
            const id = process.argv[3];
            if (!id) {
                console.error('Por favor, proporciona un ID de producto para eliminar.');
                return;
            }
            await deleteProduct(id);
        }
    } catch (error) {
        console.error('Error en la ejecución del comando:', error);
    }
}

main();