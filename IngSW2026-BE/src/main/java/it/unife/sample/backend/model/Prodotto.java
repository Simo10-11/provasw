package it.unife.sample.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

import java.math.BigDecimal;

/**
 * Entity JPA che rappresenta la tabella PRODOTTO.
 */
@Data
@Entity
@Table(name = "PRODOTTO")
public class Prodotto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "NOME", nullable = false, length = 50)
	private String nome;

	@Column(name = "DESCRIZIONE")
	private String descrizione;

	@Column(name = "PREZZO", nullable = false, precision = 10, scale = 2)
	private BigDecimal prezzo;

	@Column(name = "IMMAGINE_URL")
	private String imageUrl;

	@Column(name = "QUANTITA_DISPONIBILE", nullable = false)
	private Integer quantitaDisponibile;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "ID_CATEGORIA", nullable = false)
	private Categoria categoria;
}
