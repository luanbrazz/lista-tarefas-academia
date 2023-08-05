package com.kaspper.tarefasapi.repository;

import com.kaspper.tarefasapi.entity.Categoria;
import com.kaspper.tarefasapi.entity.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

}