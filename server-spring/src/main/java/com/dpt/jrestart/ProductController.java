package com.dpt.jrestart;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {


    private final ProductRepository repository;

    ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    // Aggregate root

    // tag::get-aggregate-root[]
    @GetMapping("/products")
    CollectionModel<EntityModel<Product>> all() {

        List<EntityModel<Product>> Products = repository.findAll().stream()
                .map(Product -> EntityModel.of(Product,
                        linkTo(methodOn(ProductController.class).one(Product.getId())).withSelfRel(),
                        linkTo(methodOn(ProductController.class).all()).withRel("Products")))
                .collect(Collectors.toList());

        return CollectionModel.of(Products, linkTo(methodOn(ProductController.class).all()).withSelfRel());
    }
    // end::get-aggregate-root[]

    @PostMapping("/products")
    Product newProduct(@RequestBody Product newProduct) {
        return repository.save(newProduct);
    }

    // Single item

    // tag::get-single-item[]
    @GetMapping("/products/{id}")
    EntityModel<Product> one(@PathVariable Long id) {

        Product Product = repository.findById(id) //
                .orElseThrow(() -> new ProductNotFoundException(id));

        return EntityModel.of(Product, //
                linkTo(methodOn(ProductController.class).one(id)).withSelfRel(),
                linkTo(methodOn(ProductController.class).all()).withRel("Products"));
    }
    // end::get-single-item[]

    @PutMapping("/products/{id}")
    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {

        return repository.findById(id) //
                .map(Product -> {
                    Product.setTitle(newProduct.getTitle());
                    return repository.save(Product);
                }) //
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return repository.save(newProduct);
                });
    }

    @DeleteMapping("/products/{id}")
    void deleteProduct(@PathVariable Long id) {
        repository.deleteById(id);
    }

}