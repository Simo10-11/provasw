package it.unife.sample.backend.mapper;

import it.unife.sample.backend.dto.ProdottoDTO;
import it.unife.sample.backend.model.Prodotto;

public class ProdottoMapper {

    private ProdottoMapper() {
    }

    // Converte l'entity in DTO con nomi uguali al DB.
    public static ProdottoDTO toDTO(Prodotto entity) {
        if (entity == null) {
            return null;
        }

        ProdottoDTO dto = new ProdottoDTO();
        dto.setID(entity.getId());
        dto.setNOME(entity.getNome());
        dto.setDESCRIZIONE(entity.getDescrizione());
        dto.setPREZZO(entity.getPrezzo());
        dto.setQUANTITA_DISPONIBILE(entity.getQuantitaDisponibile());
        dto.setID_CATEGORIA(entity.getCategoria() != null ? entity.getCategoria().getId() : null);
        return dto;
    }

    // Converte il DTO in entity (la categoria viene impostata nel service).
    public static Prodotto toEntity(ProdottoDTO dto) {
        if (dto == null) {
            return null;
        }

        Prodotto entity = new Prodotto();
        entity.setId(dto.getID());
        entity.setNome(dto.getNOME());
        entity.setDescrizione(dto.getDESCRIZIONE());
        entity.setPrezzo(dto.getPREZZO());
        entity.setQuantitaDisponibile(dto.getQUANTITA_DISPONIBILE());
        return entity;
    }
}
