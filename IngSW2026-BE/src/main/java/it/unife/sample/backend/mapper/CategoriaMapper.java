package it.unife.sample.backend.mapper;

import it.unife.sample.backend.dto.CategoriaDTO;
import it.unife.sample.backend.model.Categoria;

public class CategoriaMapper {

    private CategoriaMapper() {
    }

    // Converte entity in DTO per l'API.
    public static CategoriaDTO toDTO(Categoria entity) {
        if (entity == null) {
            return null;
        }

        CategoriaDTO dto = new CategoriaDTO();
        dto.setID(entity.getId());
        dto.setNOME(entity.getNome());
        dto.setDESCRIZIONE(entity.getDescrizione());
        return dto;
    }

    // Converte DTO in entity.
    public static Categoria toEntity(CategoriaDTO dto) {
        if (dto == null) {
            return null;
        }

        Categoria entity = new Categoria();
        entity.setId(dto.getID());
        entity.setNome(dto.getNOME());
        entity.setDescrizione(dto.getDESCRIZIONE());
        return entity;
    }
}
