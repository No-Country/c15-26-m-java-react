package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.DTOs.ProductDTO;
import com.cohorte15.ecommerce.Entities.Image;
import com.cohorte15.ecommerce.Entities.Product;
import com.cohorte15.ecommerce.Services.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/product")
public class ProductController extends BaseControllerImpl<Product, ProductServiceImpl> {

    @Autowired
    private ProductServiceImpl productService;

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO) {
        try {
            Image[] images = new Image[productDTO.getImages().length];


            return new ResponseEntity<>("Cliente creado exitosamente", HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProducts() {
        try {
            // Obtén la lista de objetos devuelta por el servicio
            List<Object[]> productList = productService.getAllProducts();

            // Convierte la lista de objetos a una lista de ProductDTO
            List<ProductDTO> productDTOList = productList.stream()
                    .map(this::mapToObject)
                    .collect(Collectors.toList());

            // Completa la información de las imágenes para cada producto
            for (int i = 0; i < productList.size(); i++) {
                Long productId = (Long) productList.get(i)[0];  // El ID del producto está en la posición 0 del array
                // Obtiene las filas de resultados de imágenes para el producto actual
                List<Object[]> imageRows = productService.getImages(productId);
                // Extrae las URLs de las filas de resultados y las convierte a Strings
                List<String> imageUrls = imageRows.stream()
                        .map(row -> row[0].toString())  // Suponemos que la URL está en la posición 0 de cada fila
                        .collect(Collectors.toList());
                // Establece las URLs en el campo 'images' del DTO
                productDTOList.get(i).setImages(imageUrls.toArray(new String[0]));
            }

            // Devuelve la lista de ProductDTO como JSON
            return ResponseEntity.status(HttpStatus.OK).body(productDTOList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // Método para mapear un Object[] a ProductDTO
    private ProductDTO mapToObject(Object[] result) {
        return ProductDTO.builder()
                .id((Long) result[0])
                .name((String) result[1])
                .category((String) result[2])
                .brand((String) result[3])
                .model((String) result[4])
                .price((int) result[5])
                .discount((double) result[6])
                .description((String) result[7])
                .images(new String[0])  // Inicialmente, un array vacío
                .build();
    }




}
