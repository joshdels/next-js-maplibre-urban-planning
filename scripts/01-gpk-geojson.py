import geopandas as gpd
import pyogrio
from pathlib import Path


def read_gpkg_information(path):
    """Gives information about layers in a GPKG file"""
    try:
        layers = pyogrio.list_layers(path)
    except Exception as e:
        print(f"Failed to read the GPKG file: {e}")
        return

    total_files = 0
    failed_layers = []

    for layer_name, geom_type in layers:
        if layer_name == "layer_styles":
            continue

        try:
            print(f"Avaialble: {layer_name} ({geom_type})")
            gdf = gpd.read_file(path, layer=layer_name)
            total_files += 1
        except Exception as e:
            print(f" Failed layer {layer_name}: {e}")
            failed_layers.append(layer_name)

    print(f"total layers read: {total_files}")
    if failed_layers:
        print(f"Failed layers: {failed_layers}")


def convert_to_geojson(path, output_dir):
    """Convert a specific file of geopackage to geojson"""
    
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)

    try:
        print(f"Converting the file to geojson {path}")
        layers = pyogrio.list_layers(path)
    except Exception as e:
        print(f"Failed to read the GPKG file: {e}")
        return

    for layer_name, geom_type in layers:
        if layer_name == "layer_styles":
            continue

        try:
            gdf = gpd.read_file(path, layer=layer_name)
            gdf = gdf.to_crs(epsg=4326)
            safe_name = layer_name.lower().replace(" ", "_").replace("&", "and")
            gdf.to_file(output_dir / f"P{safe_name}.geojson", driver="GeoJSON")

        except Exception as e:
            print(f" Failed layer {layer_name}: {e}")

    print(f"Conversion finished, please check {output_dir}")


#  Functions Called
read_gpkg_information(path="../data/clup_test.gpkg")
convert_to_geojson(path="../data/clup_test.gpkg", output_dir="../data/geojson")
