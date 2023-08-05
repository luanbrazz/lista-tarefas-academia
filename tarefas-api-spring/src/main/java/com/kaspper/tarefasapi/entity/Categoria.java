package com.kaspper.tarefasapi.entity;


import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "tbl_tarefas")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	UUID id;
	
	String nome;

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
