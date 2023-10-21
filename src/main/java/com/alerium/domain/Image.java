package com.alerium.domain;

import jakarta.persistence.*;

@Entity(name = "Image")
@Table(name = "image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Lob
    @Column(name = "image_blob", columnDefinition = "BLOB")
    private byte[] imageBlob;

    public Image() {}

    public Image(Long id, byte[] imageBlob) {
        this.id = id;
        this.imageBlob = imageBlob;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getImageBlob() {
        return imageBlob;
    }

    public void setImageBlob(byte[] imageBlob) {
        this.imageBlob = imageBlob;
    }
}
