package com.example.RootandRise.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getEcoRating() {
		return ecoRating;
	}
	public void setEcoRating(String ecoRating) {
		this.ecoRating = ecoRating;
	}
	public String getImpactSummary() {
		return impactSummary;
	}
	public void setImpactSummary(String impactSummary) {
		this.impactSummary = impactSummary;
	}
	public String getEthicalSummary() {
		return ethicalSummary;
	}
	public void setEthicalSummary(String ethicalSummary) {
		this.ethicalSummary = ethicalSummary;
	}
	public String getPurchaseLink() {
		return purchaseLink;
	}
	public void setPurchaseLink(String purchaseLink) {
		this.purchaseLink = purchaseLink;
	}
	private String name;
    private String category;
    private String ecoRating; // Example: A+, B
    private String impactSummary;
    private String ethicalSummary;
    private String purchaseLink;
    private String imageUrl;
    public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	private String price;

	public String getImage() {
		return imageUrl;
	}
	public void setImage(String imageUrl) {
		this.imageUrl = imageUrl;
	}
}

