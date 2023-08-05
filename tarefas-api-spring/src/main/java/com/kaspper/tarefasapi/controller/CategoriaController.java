package com.kaspper.tarefasapi.controller;

import com.kaspper.tarefasapi.entity.Categoria;
import com.kaspper.tarefasapi.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("categorias")
public class CategoriaController {
	
	@Autowired
	CategoriaRepository categoriaRepository;
	
	@GetMapping
	public List<Categoria> listarCategorias(){
		var categorias = categoriaRepository.findAll();
		
		return categorias;
	}
	
	@PostMapping
	public Categoria inserirCategoria(@RequestBody Categoria novaCategoria) {
		var tarefa = categoriaRepository.save(novaCategoria);
		
		return tarefa;
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deletarCategoria(@PathVariable UUID id) {
		var tarefaOp = categoriaRepository.findById(id);
		
		if(tarefaOp.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		categoriaRepository.deleteById(id);
		
		return ResponseEntity.ok(null);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Categoria> buscarPorId(@PathVariable UUID id) {
		var tarefa = categoriaRepository.findById(id);
		
		if(tarefa.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(tarefa.get());
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Categoria> atualizarCategoria(@PathVariable UUID id, @RequestBody Categoria categoriaAtualizar) {
		categoriaAtualizar.setId(id);
		
		var categoriaSalva = categoriaRepository.save(categoriaAtualizar);
		
		return ResponseEntity.ok(categoriaSalva);
	}

}
