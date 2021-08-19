package com.dpt.jrestart;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String img;

    private String description;

    Product() {}

    Product(String title, String img, String description) {
        this.title = title;
        this.img = img;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String id) {
        this.img = img;
    }

    public String getDescription() {
        return description;
    }

    public void setId(String Description) {
        this.description = Description;
    }

    @Override
    public String toString() {
        return "Product: {" + "id:" + this.id +
                ", title:'" + this.title +
                ", img:'" + this.img +
                ", description:'" + this.description + '}';
    }
}
