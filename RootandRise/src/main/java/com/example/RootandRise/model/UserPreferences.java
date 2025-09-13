package com.example.RootandRise.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class UserPreferences {
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCategories() {
		return categories;
	}
	public void setCategories(String categories) {
		this.categories = categories;
	}
	public String getBudgetRange() {
		return budgetRange;
	}
	public void setBudgetRange(String budgetRange) {
		this.budgetRange = budgetRange;
	}
	public String getSustainabilityInterests() {
		return sustainabilityInterests;
	}
	public void setSustainabilityInterests(String sustainabilityInterests) {
		this.sustainabilityInterests = sustainabilityInterests;
	}
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String categories; // Comma-separated categories
    private String budgetRange; // Example: Low, Medium, High
    private String sustainabilityInterests; // Example: Carbon footprint, Waste reduction
}

